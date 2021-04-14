import fetch from 'node-fetch';

const url = 'https://api.opensea.io/api/v1/assets';

const options = {
  method: 'GET',
  qs: {
    token_ids: '165777',
    asset_contract_address: '0xfbeef911dc5821886e1dda71586d90ed28174b7d',
    order_direction: 'desc',
    offset: '0',
    limit: '20'
  }
};

log('test API');
log(
  fetch(url, options)
    .then((res) => res.json())
    .then((json) => log(json))
    .catch((err) => error('error:' + err))
);
