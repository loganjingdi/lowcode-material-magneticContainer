import * as React from 'react';
import { RGLContainer } from '../rgl-container';

export class MagneticContainer extends React.Component {
    
    static nextX = -3;

    render() {
        console.log("===jdliu", this.props, MagneticContainer.nextX % 12);
        let { layout=[], children, _leaf } = this.props;

        // 设置MagneticContainer为RGLContainer
        _leaf.isRGLContainer = true;

        // TODO: 临时方案，设置父元素page为RGLContainer
        _leaf.parent.isRGLContainer = true;

        if (layout.length < children.length) {
            let child = children[children.length - 1];
            layout.push({
                i: child.key || 'placeholder',
                x: MagneticContainer.nextX % 12,
                // x: Infinity,
                y: Infinity,
                w: 3,
                h: 3,
            })
            MagneticContainer.nextX += 3;
        } 
        
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

