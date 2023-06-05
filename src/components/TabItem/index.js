import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    setActiveTabId(tabId)
  }

  const tabBtnClassName = isActive ? 'tabButton active' : 'tabButton'
  return (
    <>
      <li className="tabItem">
        <button type="button" className={tabBtnClassName} onClick={onClickTab}>
          {displayText}
        </button>
      </li>
    </>
  )
}
export default TabItem
