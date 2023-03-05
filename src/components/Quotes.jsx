import LinksList from './LinksList';

/**
 * Выводит список котировок, на скрине "USD MOEX" итп
 * по сути используется компонент LinksList, но ссылки в отдельный обернул на случай особенностей
 */

function Quotes({items}) {
    /** тут делаем что-то особенное для этого блока ... */
    return (
        <LinksList
            items={items}
            direction="horiz" //направление задаем здесь, так как оно всегда горизонтальное для этого блока
        />
    );
}

export default Quotes;