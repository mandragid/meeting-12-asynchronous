const NFTStore = {
  artPieces: [
    {
      pieceName: "Emo Flamingos",
      price: 30,
      ownerList: [
        {
          name: "Fida Ernest",
          userID: 23849,
          purchaseDate: "09/13/2021",
        },
        {
          name: "Eric Karger",
          userID: 23510,
          purchaseDate: "09/13/2021",
        },
      ],
    },
    {
      pieceName: "Where is my bit wallet",
      price: 100,
      ownerList: [],
    },
  ],
  storeCredits: 1000,
};

console.log(NFTStore.artPieces[0].ownerList[1].purchaseDate);
NFTStore.artPieces[1].ownerList.push("dadang", "dudung");

console.log(NFTStore.artPieces[1].ownerList);
