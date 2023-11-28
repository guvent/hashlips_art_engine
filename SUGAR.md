
# Installation

## Download and install sugar...

```
bash <(curl -sSf https://sugar.metaplex.com/install.sh)
```


## Prepare solana wallets...

### Make Owner wallet;

```
solana --version

solana-keygen --version

solana-keygen new --outfile $PWD/keys/Owner.json
```

### Output Example

```
BIP39 Passphrase (empty for none): <blank and enter>
Wrote new keypair to /Users/<username>/VSCodeProjects/candy-init/keys/Owner.json
============================================================================
pubkey: CoSsJ7kqhG8f4UbtjZh42ML5f1xfxwSLdZfChcQvvGBv
============================================================================
```

***

### Make Creator wallet;

```
solana-keygen verify --outfile $PWD/keys/Creator.json
```

### Output Example

```
BIP39 Passphrase (empty for none): <blank and enter>
Wrote new keypair to /Users/<username>/VSCodeProjects/candy-init/keys/Creator.json
===========================================================================
pubkey: 4iGuJvHNsVRcEpED7x8D6Mkro1e66gNgQfZ6GAuGB2KC
===========================================================================
```


# Solana Configuration

## Set devnet and keypair with Owner wallet

```
solana config get

solana config set -u devnet -k $PWD/keys/Owner.json
```

### Output Example

```
Config File: /Users/<username>/.config/solana/cli/config.yml
RPC URL: https://api.devnet.solana.com 
WebSocket URL: wss://api.devnet.solana.com/ (computed)
Keypair Path: /Users/<username>/VSCodeProjects/hashlips_art_engine/keys/Owner.json 
Commitment: confirmed 
```

## Airdrop sol token

```
solana airdrop 2 CoSsJ7kqhG8f4UbtjZh42ML5f1xfxwSLdZfChcQvvGBv
solana airdrop 2 4iGuJvHNsVRcEpED7x8D6Mkro1e66gNgQfZ6GAuGB2KC
```

### Or

go to website https://solfaucet.com/ and paste Owner wallet pubkey and click TESTNET with 1 and DEVNET with 2



## Prepare candy machine...


```
sugar config create
```


✔ Found 4 file pairs in "assets". Is this how many NFTs you will have in your candy machine? · `yes`

✔ Found symbol "YC" in your metadata file. Is this value correct? · `yes`

✔ Found value 1000 for seller fee basis points in your metadata file. Is this value correct? · `yes`

✔ Do you want to use a sequential mint index generation? We recommend you choose no. · `yes`

✔ How many creator wallets do you have? (max limit of 4) · `1`

✔ Enter creator wallet address #1 · `4iGuJvHNsVRcEpED7x8D6Mkro1e66gNgQfZ6GAuGB2KC`

✔ Enter royalty percentage share for creator #1 (e.g., 70). Total shares must add to 100. · `100`

✔ Which extra features do you want to use? (use [SPACEBAR] to select options you want and hit [ENTER] when done) · `(Unchecked) Hidden Settings`

✔ What upload method do you want to use? · `Bundlr`

✔ Do you want your NFTs to remain mutable? We HIGHLY recommend you choose yes. · `yes`

---

## Verify and upload candy machine...

### Check solana validator (local)

```
solana-test-validator
```

### Verify assets...

```
sugar validate
```


### Launch candy machine...

```
sugar launch
```

### Output example...

---

Starting Sugar launch... 🚀 

`>>> sugar validate`

[1/1] 🗂  Loading assets
▪▪▪▪▪ Validating 5 metadata file(s)...

Validation complete, your metadata file(s) look good.

`>>> sugar upload`

[1/4] 🗂  Loading assets
⠁ 
The creators field is deprecated in the JSON metadata, it should be set in the config file instead.
The creators field is deprecated in the JSON metadata, it should be set in the config file instead.
The creators field is deprecated in the JSON metadata, it should be set in the config file instead.
The creators field is deprecated in the JSON metadata, it should be set in the config file instead.
The creators field is deprecated in the JSON metadata, it should be set in the config file instead.
The creators field is deprecated in the JSON metadata, it should be set in the config file instead.
The creators field is deprecated in the JSON metadata, it should be set in the config file instead.
The creators field is deprecated in the JSON metadata, it should be set in the config file instead.
The creators field is deprecated in the JSON metadata, it should be set in the config file instead.
Found 5 asset pair(s), uploading files:
+--------------------+
| images    |      5 |
| metadata  |      5 |
+--------------------+

[2/4] 🖥  Initializing upload
▪▪▪▪▪ Connected
The creators field is deprecated in the JSON metadata, it should be set in the config file instead.
The creators field is deprecated in the JSON metadata, it should be set in the config file instead.
The creators field is deprecated in the JSON metadata, it should be set in the config file instead.
The creators field is deprecated in the JSON metadata, it should be set in the config file instead.
The creators field is deprecated in the JSON metadata, it should be set in the config file instead.
Funding address:
  -> pubkey: CoSsJ7kqhG8f4UbtjZh42ML5f1xfxwSLdZfChcQvvGBv
  -> lamports: 189030 (◎ 0.00018903)
Signature: 4Ab9C5vcBPSC2nGKyZL5Duzis1hMYVXsjYfVGgwqWraBQSmdxZfuJycssFpSphCUTHaPmAT7WQG7gdmKzRXSZRg4

[3/4] 📤 Uploading image files 

Sending data: (Ctrl+C to abort)
[00:00:00] Upload successful ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ 5/5

[4/4] 📤 Uploading metadata files 

Sending data: (Ctrl+C to abort)
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0/5
The creators field is deprecated in the JSON metadata, it should be set in the config file instead.
The creators field is deprecated in the JSON metadata, it should be set in the config file instead.
The creators field is deprecated in the JSON metadata, it should be set in the config file instead.
The creators field is deprecated in the JSON metadata, it should be set in the config file instead.
[00:00:00] Upload successful ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ 5/5

5/5 asset pair(s) uploaded.

`>>> sugar deploy`

[1/3] 📦 Creating collection NFT for candy machine
Collection mint ID: 7c9oRLhJeTg6c1rUoq25kFp4nqXYzn2Kd3vxqHM6Kn9M

[2/3] 🍬 Creating candy machine
Candy machine ID: 7SB2PjqmABSY27SYDmaBAqsdN56AK8SMHgPWL9BAGbpd

[3/3] 📝 Writing config lines
Sending config line(s) in 1 transaction(s): (Ctrl+C to abort)
[00:00:04] Write config lines successful ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ 1/1

`>>> sugar verify`

[1/2] 🍬 Loading candy machine
▪▪▪▪▪ Completed

[2/2] 📝 Verification
Verifying 4 config line(s): (Ctrl+C to abort)
[00:00:01] Config line verification successful ████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ 4/4

Verification successful. You're good to go!

See your candy machine at:
  -> https://www.solaneyes.com/address/7SB2PjqmABSY27SYDmaBAqsdN56AK8SMHgPWL9BAGbpd?cluster=devnet

✅ Command successful.

---

## Add guard to candy machine

### Add configuration to config.json

```
"guards": {
  "default": {
    "botTax": {
      "value": 0.01,
      "lastInstruction": true
    }
  }
},
```

### And run this command

```
sugar guard add 
```

### Output example...

[1/3] 🔍 Looking up candy machine

Candy machine ID: 7SB2PjqmABSY27SYDmaBAqsdN56AK8SMHgPWL9BAGbpd

[2/3] 🛡  Initializing a candy guard
Signature: cpn2WCAmw5Fu9JpZhbSGN8XmBQP5sZmiGaZkZtMUnAXy8hkf7TwAGPc7Bfv2k7yqMey9i8SVfPrVUxa6qqQTaiL

Candy guard ID: HGM9E9UpJnPaUeXZRMQcABKsFBto9iMNJbKre9FFBz1L

[3/3] 📦 Wrapping
Signature: 3VRPawZF3xK2nnHApVmY9yZzivg2P9SBGkxdKfAfy4L85fyJEfyBVbgxMDyz1Cczvydv1YHe8RTngjYe6duJE89c

The candy guard is now the mint authority of the candy machine.

✅ Command successful.

---

Good luck :)
