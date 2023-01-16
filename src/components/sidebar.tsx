import React from 'react'

type SideBarProps = {
  isOpen: boolean
  closeMenuClicked: VoidFunction
}

const SideBar = ({isOpen, closeMenuClicked}: SideBarProps) => {

  return (
    <div className={`c-sidebar ${isOpen ? 'c-sidebar--show' : ''}`}>
      <header className='c-sidebar__header'>
        <button className="c-sidebar__btn-close" onClick={() => closeMenuClicked()}>
          <i className="bi bi-x-lg"></i>
        </button>
      </header>

      
    </div>
  )
}

export default SideBar