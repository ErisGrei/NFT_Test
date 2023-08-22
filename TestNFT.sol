// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract TestNFT is ERC721 ("TestNFT","TNFT"){
    uint tokenId = 1;

    function freeMint() public{
      
      _mint(msg.sender, tokenId); 
      tokenId++;
    }
    function freeMintTo(address to) public{
      
      _mint(to, tokenId); 
      tokenId++;
    }

    function balanceOf(owner) public {
      
    };
    function tokenURI(uint256) override pure public returns (string memory){
        return "ipfs://bafkreibmcnmrpxdk5prsjfgicpu7bayh3hy4ktng7rtsgcbyk6mcaqrj5a";// metadata upload
    }
} 