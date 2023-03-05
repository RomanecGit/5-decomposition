import LinksList from './LinksList';
/**
 *
 * выводит блок со списком. Фактически это универсальный Block (заголовок плюс содержимое),
 * но на случай особенностей обернул в отдельный компонент
 */
function MapBlock(props){
    /** здесь делаем что-то особенное для этого компонента*/
    return (
        /** вывод заголовка и children */
        <Block title="Карта Германии">
            <LinksList items={[
                {
                    text: "Расписания",    //обычный шритф-цвет
                    url: "/rasp"
                }]
            }/>
        </Block>
    );
}
export default MapBlock;