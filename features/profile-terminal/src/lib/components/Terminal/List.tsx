const styles = {
  longList: {},
  shortList: {
    element: {
      marginRight: '2rem',
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  },
};

const List = ({ name, long = false, children, ...rest }) => {
  if (!Array.isArray(children)) {
    children = [children];
  }

  if (long) {
    return (
      <div {...rest}>
        {children.map((child, index) => (
          <div key={`${name}_entry_${index}`}>{child}</div>
        ))}
      </div>
    );
  } else {
    return (
      <div {...rest} style={styles.shortList.container}>
        {children.map((child, index) => (
          <span key={`${name}_entry_${index}`} style={styles.shortList.element}>
            {child}
          </span>
        ))}
      </div>
    );
  }
};

export default List;
