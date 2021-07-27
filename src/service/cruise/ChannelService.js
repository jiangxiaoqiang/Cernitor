import { getChannels,editChannelAction,editorPickChannelAction } from '../../actions/ChannelActions';
import { requestWithAction } from '../../api/XHRClient';
import { API } from '@/api/config'

export function getChannelList(request) {
    const config = {
        method: 'post',
        url: `${API}/manage/sub/source/page`,
        data: JSON.stringify(request)
    };
    return requestWithAction(config, getChannels);
}

export function editChannel(request) {
    const config = {
        method: 'post',
        url: `${API}/manage/sub/source/update`,
        data: JSON.stringify(request)
    };
    return requestWithAction(config, editChannelAction);
}

export function editorPickChannel(request) {
    const config = {
        method: 'post',
        url: `${API}/manage/sub/source/editor-pick`,
        data: JSON.stringify(request)
    };
    return requestWithAction(config, editorPickChannelAction);
}