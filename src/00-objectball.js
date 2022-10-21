const teams = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
            number: 0, 
            shoe: 16, 
            point: 22, 
            rebound: 12,
            assist: 12,
            steal: 3,
            block: 1,
            slam: 1 
        },
        "Reggie Evans": {
            number: 30, 
            shoe: 14, 
            point: 12, 
            rebound: 12,
            assist: 12,
            steal: 12,
            block: 12,
            slam: 7 
        },
        "Brook Lopez": {
            number: 11, 
            shoe: 17, 
            point: 17, 
            rebound: 19,
            assist: 10,
            steal: 3,
            block: 1,
            slam: 15 
        },
        "Mason Plumlee": {
            number: 1, 
            shoe: 19, 
            point: 26, 
            rebound: 12,
            assist: 6,
            steal: 3,
            block: 8,
            slam: 5 
        },
        "Jason Terry": {
            number: 31, 
            shoe: 15, 
            point: 19, 
            rebound: 2,
            assist: 2,
            steal: 4,
            block: 11,
            slam: 1 
        }
      }
    },
    away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
              number: 4, 
              shoe: 18, 
              point: 10, 
              rebound: 1,
              assist: 1,
              steal: 2,
              block: 7,
              slam: 2 
          },
          "Bismak Biyombo": {
              number: 0, 
              shoe: 16, 
              point: 12, 
              rebound: 4,
              assist: 7,
              steal: 7,
              block: 15,
              slam: 10 
          },
          "DeSagna Diop": {
              number: 2, 
              shoe: 14, 
              point: 24, 
              rebound: 12,
              assist: 12,
              steal: 4,
              block: 5,
              slam: 5 
          },
          "Ben Gordon": {
              number: 8, 
              shoe: 15, 
              point: 33, 
              rebound: 3,
              assist: 2,
              steal: 1,
              block: 1,
              slam: 0 
          },
          "Brendan Haywood": {
              number: 33, 
              shoe: 15, 
              point: 6, 
              rebound: 12,
              assist: 12,
              steal: 22,
              block: 5,
              slam: 12 
          }
        }
    } 
  }
function gameObject(){
    return teams
}

function homeTeam() {
    let home = gameObject()
    return home['home']['teamName']
  }

function awayTeam() {
    let away = gameObject()
    return away['away']['teamName']
}

function numPointsScored(player){
    
    for (let i of Object.keys(teams)){
        let teamHA = teams[i]
        for (let pl of Object.keys(teamHA)){
            let teamOBJ = teamHA[pl]
            for (let pl of Object.keys(teamOBJ)){
                if (pl == player){
                return teamOBJ[pl]
                }
            }
        }
    }
    
}