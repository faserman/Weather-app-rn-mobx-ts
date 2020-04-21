import { utils } from '../utils/index';

class BackgroundImgApi {
  getBackgroundImage(weatherDescription: string) {
    const weatherDescriptionImage = utils.setDescriptionBackgroundImg(weatherDescription)
    const backgroundImage = (`https://source.unsplash.com/720x1560/?nature,${ weatherDescriptionImage }`);
    return backgroundImage
  }
}

export const backgroundImgApi = new BackgroundImgApi(); 