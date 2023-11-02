import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import ArrowDownIcon from 'components/Icons/ArrowDownIcon';
import Input from '../Input';
import Text from '../Text';
import styles from './Dropdown.module.scss';

export type Option = {
  key: string;
  value: string;
};

export type DropdownProps = {
  className?: string;
  options: Option[];
  value: Option[];
  onChange: (value: Option[]) => void;
  disabled?: boolean;
  getTitle: (value: Option[]) => string;
};

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  disabled,
  getTitle,
  onChange,
  className,
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [filter, setFilter] = useState('');

  const selectedSet = React.useMemo(() => new Set(value), [value]);
  const filteredOptions = React.useMemo(
    () =>
      options.filter((o) =>
        o.value.toLowerCase().includes(filter.toLowerCase())
      ),
    [filter, options]
  );

  const onClickDropDown = React.useCallback(() => {
    console.log('onClickDropDown value', value, disabled);
    if (disabled) {
      return;
    }

    setIsOpen(true);
    setIsTyping(true);
  }, [disabled, value]);

  const onClickOption = (selectedOption: Option) => {
    if (disabled) {
      return;
    }

    setIsTyping(false);

    if (selectedSet.has(selectedOption)) {
      onChange(value.filter((item) => item.key !== selectedOption.key));
    }

    onChange([...value, selectedOption]);
  };

  React.useEffect(() => {
    const onDocumentClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Element)) {
        setIsOpen(false);
        setIsTyping(false);
        setFilter('');
      }
    };

    document.addEventListener('click', onDocumentClick);

    return () => {
      document.removeEventListener('click', onDocumentClick);
    };
  }, []);

  useEffect(() => {
    if (disabled) {
      setIsOpen(false);
      setIsTyping(false);
      setFilter('');
    }
  }, [disabled]);

  const title = React.useMemo(() => getTitle(value), [getTitle, value]);

  const inputValue = React.useMemo(() => {
    if (!isOpen) {
      if (value.length === 0) {
        return '';
      }

      return title;
    }

    if (isTyping) {
      return filter;
    }

    return '';
  }, [isOpen, isTyping, filter, title, value.length]);

  return (
    <div
      className={cn(
        styles.dropdown,
        isOpen && styles.dropdown_open,
        disabled && styles.dropdown_disabled,
        className
      )}
      ref={rootRef}
    >
      <Input
        className={styles.dropdown__input}
        value={inputValue}
        placeholder={title}
        onChange={setFilter}
        onClick={onClickDropDown}
        afterSlot={<ArrowDownIcon color="secondary" />}
      />
      {isOpen && (
        <div className={styles.dropdown__options}>
          {filteredOptions.map((option) => (
            <button
              type="button"
              key={option.key}
              className={cn(
                styles.dropdown__option,
                selectedSet.has(option) && styles.dropdown__option_selected
              )}
              onClick={() => {
                onClickOption(option);
              }}
            >
              <Text view="p-16">{option.value}</Text>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
