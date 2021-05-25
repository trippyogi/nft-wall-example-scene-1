export function GetNftInfo(tokenId: string, contractAddress: string) {
  const url = 'https://api.opensea.io/api/v1/assets';

  const token_ids = '165777';
  const asset_contract_address = '0xfbeef911dc5821886e1dda71586d90ed28174b7d';

  log('test API');
  let nft: any;

  executeTask(async () => {
    try {
      let response = await fetch(
        url + `?token_ids=${tokenId}&asset_contract_address=${contractAddress}`
      );
      let json = await response.json();
      log(json.assets[0].id);
      nft = json;
    } catch {
      log('failed to reach URL');
    }
  });
  return nft;
}
