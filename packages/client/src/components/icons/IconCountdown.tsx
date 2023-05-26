import { Icon } from '@douyinfe/semi-ui';

export const IconCountdown: React.FC<{ style?: React.CSSProperties }> = ({ style = {} }) => {
  return (
    <Icon
      style={style}
      svg={
        <svg width="16" height="16" viewBox="0 0 1024 1024" role="presentation">
          <path d="M896 170.666667H128a42.666667 42.666667 0 0 1 0-85.333334h768a42.666667 42.666667 0 0 1 0 85.333334zM896 938.666667H128a42.666667 42.666667 0 0 1 0-85.333334h768a42.666667 42.666667 0 0 1 0 85.333334z"></path>
          <path d="M512 554.666667a298.666667 298.666667 0 0 1-298.666667-298.666667V128a42.666667 42.666667 0 0 1 42.666667-42.666667h512a42.666667 42.666667 0 0 1 42.666667 42.666667v128a298.666667 298.666667 0 0 1-298.666667 298.666667zM298.666667 170.666667v85.333333a213.333333 213.333333 0 0 0 426.666666 0V170.666667z"></path>
          <path d="M768 938.666667H256a42.666667 42.666667 0 0 1-42.666667-42.666667v-128a298.666667 298.666667 0 0 1 597.333334 0v128a42.666667 42.666667 0 0 1-42.666667 42.666667zM298.666667 853.333333h426.666666v-85.333333a213.333333 213.333333 0 0 0-426.666666 0z"></path>
        </svg>
      }
    />
  );
};
