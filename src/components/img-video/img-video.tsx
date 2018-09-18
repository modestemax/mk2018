import { Component, Prop} from '@stencil/core';

@Component({
  tag: 'img-video',
  styleUrl: 'img-video.scss'
})
export class ImgVideo {

  @Prop() width = '100%';
  @Prop() height = '300px';
  @Prop() img: string;
  @Prop() video: string;
  @Prop() vtitle: string;


  render() {
    if (this.img) {
      return (<img class="res-image" src={`/assets/img/${this.img}`} alt=""/>);
    }
    if (this.video) {
      return (<lazy-iframe src={this.video} width={this.width} height={this.height} title={this.vtitle}/>);
    }
  }
}
