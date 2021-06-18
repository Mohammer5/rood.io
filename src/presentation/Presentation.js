import React from 'react'
import { Provider } from 'react-redux';
import { ContentSection } from '../contents';
import { Controls } from '../controls';
import data from '../data/yt-video.js'
import { DataProvider } from '../dataContext'
import { configureStore } from '../utils';
import { Player } from '../video';
import { rootReducer } from './rootReducer'

const store = configureStore({ rootReducer })

export const Presentation = () => (
  <Provider store={store}>
    <DataProvider value={data}>
      <div id="Presentation">
        <Player data={data} />
        <Controls data={data} />
        <ContentSection data={data} />
      </div>
    </DataProvider>
  </Provider>
)
