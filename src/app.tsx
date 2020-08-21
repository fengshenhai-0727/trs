import Trs from './trs';
const a = (
    <div>
        a
        <br />b 江山如此多娇
        <ol>
            <li tabIndex={1}>1</li>
            <li tabIndex={2}>2</li>
            <li>3</li>
            <li>4</li>
        </ol>
    </div>
);

class Abc extends Trs.Component {
    render() {
        return (
            <div>
                {a} {this.children}
            </div>
        );
    }
}

const HaHa = function () {
    console.log('haha');
    return (
        <Abc>
            <div>引无数英雄竞折腰</div>
        </Abc>
    );
};

Trs.render(<HaHa />, document.getElementById('root'));
