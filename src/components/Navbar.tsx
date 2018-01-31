import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';

const scrollingNavbarOffset = 50;

const getExpandClass = (expand : any) => {
  if (expand === false) {
    return false;
  } else if (expand === true || expand === 'xs') {
    return 'navbar-expand';
  }

  return `navbar-expand-${expand}`;
};

class Navbar extends React.Component<any,any> {

    static defaultProps = {
        tag: 'nav',
        expand: false,
        scrolling: false
    };

  navbar:any

  constructor(props : any, refs : any) {
    super(props, refs);
    this.state = {isCollapsed: false};
    this.refs = {};
  }

  handleScroll() {
    if(window.pageYOffset > scrollingNavbarOffset) {
      this.setState({isCollapsed: true});
    } else {
      this.setState({isCollapsed: false});
    }
  }

  componentDidMount() {
    if(this.props.scrolling) {
      window.addEventListener('scroll', this.handleScroll.bind(this));
    }
  }

  componentWillUnmount() {
    if(this.props.scrolling) {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
    }
  }

  render() {

    const {
      expand,
      light,
      dark,
      sticky,
      fixed,
      scrolling,
      color,
      className,
      tag: Tag,
      ...attributes
    } = this.props;

    let classes = classNames(
      'navbar',
      light ? 'navbar-light' : '',
      dark ? 'navbar-dark' : '',
      sticky ? 'sticky-' + sticky : '',
      fixed ? 'fixed-' + fixed : '',
      getExpandClass(expand),
      scrolling ? 'scrolling-navbar' : '',
      this.state.isCollapsed ? 'top-nav-collapse' : '',
      color ? color : '',
      className
    );

    return (
        <Tag {...attributes} className={classes} ref={(input : any) => this.navbar = input} />
    );
  }
}

export default Navbar;