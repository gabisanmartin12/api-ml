const { get } = require("./index");
const { SITE_ID } = require("../constants");
const { URLS } = require("../constants/urls");

module.exports.getAll = async (filters) => {
  // Avoid custom filters
  let uri = new URLSearchParams();
  if (filters.q) uri.append("q", filters.q);
  if (filters.limit) uri.append("limit", filters.limit);
  if (filters.offset) uri.append("offset", filters.offset);

  const res = await get(
    `${URLS.API}/sites/${SITE_ID}/search?${uri.toString()}`
  );

  if (res.data.status >= 400) throw res.data;

  return { paging: res.data.paging, items: res.data.results };
};

module.exports.getById = async (id) => {
  const res = await Promise.allSettled([
    get(`${URLS.API}/items/${id}`),
    get(`${URLS.API}/items/${id}/description`),
  ]);

  // Check if the item exists
  if (res[0].value.status >= 400) throw res[0].value.data;
  // if the description request was successfull, then we set its value
  res[0].value.data.description =
    res[1].value.status === 200 ? res[1].value.data.plain_text : null;

  return { item: { ...res[0].value.data } };
};
