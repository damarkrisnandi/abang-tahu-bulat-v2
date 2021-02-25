module.exports = {
    name: 'survival',
    command: 'sv:',
    description: 'survive from redzone',
    type: 'game',
    content: async () => {

        create = (strArr) => {
            for (const line of strArr) {
                let battleField = '';
                if (line !== atrArr[atrArr.length - 1]) {
                    battleField += line + '\n';
                } else {
                    battleField += line;
                }

                return battleField;
            }
        }

        standby = () => {
            const line = 'O O O O O O O O';
            let arrB = [];
            for (const side of line.split(' ')) {
                arrB.push(line);
            } 
            const battleField = create(arrB);
            return {battleField, arrB};
        }

        setLatestPos = (arr, x, y, id) => {
            let row = [];
            row = arr[x].split(' ');
            if (row[y] !== 'O') {
                row[y] = id;
                arr[x] = row.join(' ');
            }
            return arr;            
        }

        pick = (x, y, turn) => {
            let latestPos = [];
            if (turn == 1) {
                latestPos = standby().arrB;
            } else {
                latestPost = setLatestPos(latestPos, x, y);
            }
        }

        const battleField = standby().battleField;
        const message = 'pilih titik tampat kamu untuk berdiri';
        return {game: battleField, message};
    }
}