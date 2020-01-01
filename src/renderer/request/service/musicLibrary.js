import { get } from '../request';

const bannerApi = '/banner';

export const getBannerListRequest = async (params) => {
  const {
    banners,
  } = await get(bannerApi, params);
  return banners;
};

export const aaa = async () => {

};
