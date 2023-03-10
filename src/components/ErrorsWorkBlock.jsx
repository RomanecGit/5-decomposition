import Block from './Block';
/**
 *
 * выводит блок "Работа над ошибками справа вверху". Фактически это универсальный Block
 * (заголовок плюс содержимое),
 * но на случай особенностей обернул в отдельный компонент
 */
function ErrorsWorkBlock(props){
    /** здесь делаем что-то особенное для этого компонента*/
    return (
        /** вывод заголовка и картинки */
        <Block {...props} title="Работа над ошибками" img="Зеленая круглая картинка справа вверху" />
    );
}
export default ErrorsWorkBlock;