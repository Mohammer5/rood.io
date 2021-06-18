export const getContent = state => state.content
export const getContents = state => getContent(state).contents
export const getActiveContent = state => getContent(state).activeContent
export const getShowContent = state => getContent(state).showContent
