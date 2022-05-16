import request from "./request";

export function getTopBanners() {
  return request({
    url: "/banner",
  });
}

export function getHotRecommend() {
  return request({
    url: "/personalized",
  });
}

export function getNewAlbum(limit, offset) {
  return request({
    // url: `/top/album?offset=0&limit=${limit}`,
    url: "/top/album",
    params: {
      offset: offset,
      limit: limit,
    },
  });
}
