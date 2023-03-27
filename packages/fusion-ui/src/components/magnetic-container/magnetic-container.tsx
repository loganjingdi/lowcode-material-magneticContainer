import * as React from 'react';
import { RGLContainer } from '../rgl-container';

export class MagneticContainer extends React.Component {
    
    static nextX = -3;

    render() {
        
        let { layout=[], children, _leaf } = this.props;

        // 设置MagneticContainer为RGLContainer, 预览态无_leaf
        _leaf?.isRGLContainer = true;

        // TODO: 临时方案，设置父元素为RGLContainer
        _leaf?.parent?.isRGLContainer = true;

        if (layout.length < children.length) {
            let child = children[children.length - 1];
            layout.push({
                i: child.key || 'placeholder',
                x: MagneticContainer.nextX % 12,
                y: Infinity,
                w: 3,
                h: 3,
            })
            MagneticContainer.nextX += 3;
        } 
        
        // 去掉 placeholder
        if (children[0].props.className == 'lc-container-placeholder') {
            children= [];
        }

        return (
            <div className="vc-rootcontent" style={{height: "100vh"}}>
                <RGLContainer layout={layout} _leaf={_leaf}>
                    {children}
                </RGLContainer>
            </div>
        )
    }
}

