import React, { PureComponent } from 'react';
import { Grid } from '../../components/Grid';
import { FlexBox } from '../../components/FlexBox';
import { BoxModel } from '../../components/BoxModel';


class Dashboard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getPathName() {
    const { location: { pathname } } = this.props;
    return pathname;
  }
  componentMap() {
    return { '/grid': Grid, '/flexbox': FlexBox, '/boxmodel': BoxModel };
  }
  getComponent() {
    return this.componentMap()[this.getPathName()];
  }
  render() {
    const Component = this.getComponent();
    return(
       <Component {...this.state} />
    )
  }
}

export { Dashboard };
