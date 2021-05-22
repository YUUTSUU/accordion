const wrapper = document.querySelector('.wrapper');
let accardeons;

const service = [
  {
    id: 1,
    title: "Title 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 2,
    title: "Title 2",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 3,
    title: "Title 3",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 4,
    title: "Title 4",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 5,
    title: "Title 5",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
]

const renderContent = (item) => {
  return `
          <div class="accardeon">
            <div class="accardeon_title">${item.title}</div>
            <div class="accardeon_content">${item.content}</div>
          </div>
        `
}

const innerContent = () => {
  service.forEach(item => {
    wrapper.innerHTML += renderContent(item)
  })
  accardeons = document.querySelectorAll('.accardeon')
}

innerContent()

//forEach
if(accardeons) {
  accardeons.forEach(item => {
    item.addEventListener('click', () => {
      if(item.classList.contains('active')) {
        item.classList.remove('active')
      } else {
        accardeons.forEach(element => {
            element.classList.remove('active')
        })
        item.classList.add('active')
      }    
    })
  })
}

//for ...of
// if(accardeons) {
//   for(item of accardeons) {
//     item.addEventListener('click', function() {
//       if(this.classList.contains('active')) {
//         this.classList.remove('active')
//       } else {
//         for(element of accardeons) {
//           element.classList.remove('active')
//         }
//         this.classList.add('active')
//       }
//     })
//   }
// }