function factory(library, orders) {
  let arr = [];
        for(let key of orders) {
           let compose = Object.assign({}, key.template);

           for(let part of key.parts) {
             compose[part] = library[part]
           }
           arr.push(compose)
        }
     return arr;
}
   
const library = {
  print: function () {
  console.log(`${this.name} is printing a page`);
  },
  scan: function () {
  console.log(`${this.name} is scanning a document`);
  },
  play: function (artist, track) {
  console.log(`${this.name} is playing '${track}' by ${artist}`);
  },
  };
  const orders = [
  {
  template: { name: 'ACME Printer'},
  parts: ['print']
  },
  {
  template: { name: 'Initech Scanner'},
  parts: ['scan']
  },
  {
  template: { name: 'ComTron Copier'},
  parts: ['scan', 'print']
  },
  {
  template: { name: 'BoomBox Stereo'},
  parts: ['play']
  },
  ];
  const products = factory(library, orders);
  console.log(products);

  const player = products[3];
  player.play('Rick Blackmor', 'Go to home')












