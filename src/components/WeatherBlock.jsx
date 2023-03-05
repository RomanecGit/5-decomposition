import Block from './Block';
/**
 *
 * выводит блок с погодой. Фактически это универсальный Block (заголовок плюс содержимое),
 * но на случай особенностей обернул в отдельный компонент
 */
function WeatherBlock(props){
    /** здесь делаем что-то особенное для этого компонента*/
    return (
        /** вывод заголовка и children - компонент Weather*/
        <Block title="Погода">
            <Weather/> {/** компонент рисует погоду, делать его не стал*/}
        </Block>
    );
}
export default WeatherBlock;