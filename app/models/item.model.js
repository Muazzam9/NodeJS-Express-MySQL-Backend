module.exports = (sequelize, Sequelize) => {
  const Shop = sequelize.define("item", {
    title: {
      type: Sequelize.STRING
    },
    keywords: {
      type: Sequelize.JSON
    },
    flagged: {
      type: Sequelize.BOOLEAN
    }
  });

  return Shop;
};
