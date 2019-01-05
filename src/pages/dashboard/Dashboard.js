import React, { PureComponent } from 'react';
import { Grid } from '../../components/Grid';
import { FlexBox } from '../../components/FlexBox';
import { getPhotos } from '../../api';

const clientId = process.env.REACT_APP_UNSPLASH_API_ACCESS_KEY;
const getPhotosUrl = `https://api.unsplash.com/photos?page=1&client_id=${clientId}`;

class Dashboard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }
  componentDidMount() {
    getPhotos(getPhotosUrl).then(this.onSuccess)
  }
  onSuccess = data => {
    const images = data.map(obj => obj.urls.regular);
    this.setState({ images });
  }
  getPathName() {
    const { location: { pathname } } = this.props;
    return pathname;
  }
  componentMap() {
    return { '/grid': Grid, '/flexbox': FlexBox };
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
