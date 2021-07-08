/* eslint-disable no-param-reassign */
import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit'
import { toastTypes } from 'alium-uikit/src'
import { kebabCase } from 'lodash'
import { push } from 'state/toasts'
import { Achievement, AchievementState } from '../types'
import { getAchievements } from './helpers'

const initialState: AchievementState = {
  data: [],
}

export const achievementSlice = createSlice({
  name: 'achievements',
  initialState,
  reducers: {
    addAchievement: (state, action: PayloadAction<Achievement>) => {
      state.data.push(action.payload)
    },
    addAchievements: (state, action: PayloadAction<Achievement[]>) => {
      state.data.concat(action.payload)
    },
    setAchievements: (state, action: PayloadAction<Achievement[]>) => {
      state.data = action.payload
    },
    clearAchievements: (state) => {
      state.data = []
    },
  },
})

// Actions
export const { addAchievement, addAchievements, setAchievements, clearAchievements } = achievementSlice.actions

// Thunks
export const fetchAchievements = (account: string) => async (dispatch: Dispatch) => {
  try {
    const achievements = await getAchievements(account)
    dispatch(setAchievements(achievements))
  } catch (error) {
    const title = 'Error fetching achievements'
    dispatch(push({ id: kebabCase(title), type: toastTypes.DANGER, title }))
  }
}

export default achievementSlice.reducer
