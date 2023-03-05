import LinksList from './LinksList';
/**
 *
 * выводит блок с Телепрограммой. Фактически это универсальный Block (заголовок плюс содержимое),
 * но на случай особенностей обернул в отдельный компонент
 */
function BroadcastBlock(props){
    /** здесь делаем что-то особенное для этого компонента*/
    return (
        /** вывод заголовка и children */
        <Block title="Телепрограмма">
            <LinksList items={[
                {
                    text: "02:00 ТНТ",              //обычный шритф-цвет
                    rightText: "ТНТ International", //серый текст
                    url: "/rasp"
                },
                //остальные пункты
            ]
            }/>
        </Block>
    );
}
export default BroadcastBlock;