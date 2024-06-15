const crypto = require("crypto");

function testDeffieHeilman() {
  // 3072 Modp Group
  const alice = crypto.getDiffieHellman("modp15");
  const bob = crypto.getDiffieHellman("modp15");

  // Generating Keys
  alice.generateKeys();
  bob.generateKeys();

  // Public Keys
  alicePublicKey = alice.getPublicKey();
  bobPublicKey = bob.getPublicKey();

  const aliceSecret = alice.computeSecret(bobPublicKey, null, "hex");
  const bobSecret = bob.computeSecret(alicePublicKey, null, "hex");

  console.log(aliceSecret === bobSecret);
}

module.exports = testDeffieHeilman;
