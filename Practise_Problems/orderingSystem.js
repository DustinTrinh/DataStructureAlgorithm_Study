  //Structure of Commands : ['INSERT', 'Item', 'Price'] or ['VIEW', '-', '-']
  // a change

  const machine = (commands) => {
    //Structure of the store = [  [[item1, item2, item3], price]  ];
    let store = [];
    let visited = 0;
    let result = [];

    for (let i = 0; i < commands.length; i++) {
      if (commands[i][0] == "INSERT") {
        let price = commands[i][2];
        let item = commands[i][1];

        if (store.length > 0) {
          for (let j = 0; j < store.length; j++) {
            //A value to keep track of store indexes
            let tracker = 0;

            //If new item is cheaper than the index. Unshift
            if (store[j][1] > price) {
              let firstHalf = store.slice(0, j);
              let secondHalf = store.slice(j);

              firstHalf.push([[item], price]);
              store = firstHalf.concat(secondHalf);
              break;
            }

            //If new item is equal to the index. Add to the array, alphabetically
            else if (store[j][1] === price) {
              store[j][0].push(item);

              //sort by name
              //store[j][0].sort();
              break;
            }

            //If new item is more expensive than index.
            else {
              while (tracker <= store.length) {
                //End of the store and no more items to compare with
                if (tracker === store.length) {
                  store.push([[item], price]);
                  break;
                }

                //If the price is larger than items within the store. Go right
                if (store[tracker][1] < price) {
                  tracker += 1;
                }

                //If the price is equal to items within the store. Insert
                else if (store[tracker][1] === price) {
                  store[tracker][0].push(item);
                  //store[tracker][0].sort();
                  break;
                }

                //If the price is less than items within the store. Insert
                //Split the array into 2 parts. Insert new item into the middle of the first part.
                //Then merge them together
                else {
                  let firstHalf = store.slice(0, tracker);
                  let secondHalf = store.slice(tracker);

                  firstHalf.push([[item], price]);
                  store = firstHalf.concat(secondHalf);
                  break;
                }
              }

              break;
            }
          }
        }

        //Store is empty. First item ever
        else {
          store.push([item], price);
        }
      }

      //This is VIEW
      else {
        result.push(store[visited][0].sort());
        visited += 1;
      }
    }

    console.log("-------------------COMMANDS-------------------");
    console.log(commands);
    console.log("-------------------STORE-------------------");
    console.log(store);
    console.log("-------------------RESULT VIEW-------------------");

    //Showing whole result array (debug purpose)
    return result;

    //Showing the Nth cheapest item based on # of visits.
    //return result[result.length-1];
  };

  let commands = [
    ["INSERT", "Pizza", 8],
    ["INSERT", "Milk", 4],
    ["INSERT", "Gum", 1],
    ["INSERT", "Coffee", 4],
    ["VIEW", "-", "-"],
    ["INSERT", "Snack", 5],
    ["VIEW", "-", "-"],
    ["VIEW", "-", "-"],
  ];

  console.log(machine(commands));
