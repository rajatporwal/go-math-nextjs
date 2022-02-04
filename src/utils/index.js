import JAVASCRIPT_CONFIG from '../config/javascriptConfig';
import REACT_JS_CONFIG from '../config/reactJsConfig';

export * from './http-util';

export const getSearchData = () => {
    const js = JAVASCRIPT_CONFIG.map(ele => {
        return ele.children.map(child => (
            {
                title: child.keywords,
                path: `${ele.pathname}#${child.id}`
            }
        )
        )
        
    })

    const reactData = REACT_JS_CONFIG.map(ele => {
        return ele.children.map(child => (
            {
                title: child.keywords,
                path: `${ele.pathname}#${child.id}`
            }
        )
        )
        
    })

    return [...js.flat(), ...reactData.flat()];
}