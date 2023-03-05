import Menu from './Menu';
/**
 * ссылки вверху страницы ("Сейчас в СМИ" и еще две правее)
 * внутри будет компонент Menu, но на случай каких-то особенностей эти ссылки вывожу
 * отдельным компонентом
 */
function TopMenu({items}){
    /** тут что-то особенное для этого меню делаем*/
    return (
        <Menu items={items}/>
    );
}
export default TopMenu