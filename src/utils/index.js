import JAVASCRIPT_CONFIG from '../config/javascriptConfig';

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

    return [...js.flat()];
}