/**
 * Created by vo13n on 07-Jul-17.
 */
function solve(array) {
    let inheritor = (function () {
        let objects = new Map();
        function create(name, param, parent) {
            if(param) inherit(name, parent);
            else objects.set(name, {});
        }

        function inherit(name, parent) {
            objects.set(name, Object.create(objects.get(parent)));
        }
        function set(objName, propName, value) {
            objects.get(objName)[propName] = value;
        }
        function print(objectName) {
            let current = objects.get(objectName);
            let props = [];
            for(let prop in current){
                props.push(`${prop}:${current[prop]}`);
            }
            console.log(props.join(', '));
        }

        return{
            create,
            inherit,
            set,
            print
        }
    })();
    for(let cmd of array){
        let [comamand, name, param, value] = cmd.split(' ');
        inheritor[comamand](name, param, value);
    }
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);