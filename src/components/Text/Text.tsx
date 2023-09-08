import cn from 'classnames';
import styles from './Text.module.scss';

export type TextProps = {
  className?: string;
  view?: 'title' | 'button' | 'p-20' | 'p-18' | 'p-16' | 'p-14';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p' | 'span';
  weight?: 'normal' | 'medium' | 'bold';
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'accent';
  maxLines?: number;
};

const Text: React.FC<TextProps> = ({
  className,
  view,
  tag = 'p',
  weight,
  children,
  color,
  maxLines,
}) => {
  const Tag = tag;

  return (
    <Tag
      className={cn(
        styles.text,
        styles[`text_weight-${weight}`],
        styles[`text_view-${view}`],
        color && styles[`text_color-${color}`],
        !!maxLines && styles['text_multi-elipsis'],
        className
      )}
      style={{ '--max-lines-count': maxLines } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
};

export default Text;
