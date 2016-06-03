var Syncano = require("Syncano");
var Observable = require("FuseJS/Observable");
var instances = Observable();
var account = Syncano({accountKey : "PUT_HERE_YOUR_KEY"});

function genUniqueName() {
    var adjs = [
      'autumn', 'hidden', 'bitter', 'misty', 'silent', 'empty', 'dry', 'dark',
      'summer', 'icy', 'delicate', 'quiet', 'white', 'cool', 'spring', 'winter',
      'patient', 'twilight', 'dawn', 'crimson', 'wispy', 'weathered', 'blue',
      'billowing', 'broken', 'cold', 'damp', 'falling', 'frosty', 'green',
      'long', 'late', 'lingering', 'bold', 'little', 'morning', 'muddy', 'old',
      'red', 'rough', 'still', 'small', 'sparkling', 'throbbing', 'shy',
      'wandering', 'withered', 'wild', 'black', 'young', 'holy', 'solitary',
      'fragrant', 'aged', 'snowy', 'proud', 'floral', 'restless', 'divine',
      'polished', 'ancient', 'purple', 'lively', 'nameless'
    ];

    var nouns = [
      'waterfall', 'river', 'breeze', 'moon', 'rain', 'wind', 'sea', 'morning',
      'snow', 'lake', 'sunset', 'pine', 'shadow', 'leaf', 'dawn', 'glitter',
      'forest', 'hill', 'cloud', 'meadow', 'sun', 'glade', 'bird', 'brook',
      'butterfly', 'bush', 'dew', 'dust', 'field', 'fire', 'flower', 'firefly',
      'feather', 'grass', 'haze', 'mountain', 'night', 'pond', 'darkness',
      'snowflake', 'silence', 'sound', 'sky', 'shape', 'surf', 'thunder',
      'violet', 'water', 'wildflower', 'wave', 'water', 'resonance', 'sun',
      'wood', 'dream', 'cherry', 'tree', 'fog', 'frost', 'voice', 'paper',
      'frog', 'smoke', 'star'
    ];

    var rnd = Math.floor(Math.random() * 9000) + 1000;
    var noun = nouns[Math.floor(Math.random() * nouns.length)];
    var adj = adjs[Math.floor(Math.random() * adjs.length)];

    return adj + '-' + noun + '-' + rnd;
}

function fetchInstances() {
    console.log('fetchInstances::call');
    account.Instance.please().list()
      .then(function(response, raw) {
        console.log('fetchInstances::success');
        instances.replaceAll(response);
      })
      .catch(function(error) {
        console.log('fetchInstances::error', JSON.stringify(error));
        instances.replaceAll([]);
      })
}

function addInstance() {
    console.log('addInstance::call');

    account.Instance({ name: genUniqueName() }).save()
      .then(function(response) {
        console.log('addInstance::success');
        instances.add(response);
      })
      .catch(function(error) {
        console.log(error);
      })
}

function removeInstance(sender) {
    console.log('removeInstance::call');

    account.Instance.please().delete({ name: sender.data.name })
      .then(function(response) {
        console.log('removeInstance::success');
        fetchInstances();
      })
      .catch(function(error) {
          console.log('removeInstance::error', JSON.stringify(error));
      });
}

fetchInstances();

module.exports = {
    instances: instances,
    addInstance: addInstance,
    removeInstance: removeInstance
};
