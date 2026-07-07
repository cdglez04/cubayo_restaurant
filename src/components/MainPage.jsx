import { Link } from "react-router-dom"
import Hero from './Hero'
import Promises from './Promises'
import Menu from './Menu'
import FullMenu from './FullMenu'
import Story from './Story'
import Location from './Location'

function MainPage() {
    return (
        <>
            <Hero />
            <Promises />
            <Menu />
            <FullMenu />
            <Story />
            <Location />
        </>
    )
}

export default MainPage