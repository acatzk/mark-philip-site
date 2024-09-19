import { create } from 'zustand'

type MenuToggle = {
  isOpen: boolean
  toggle: () => void
}

export const useMenuToggle = create<MenuToggle>((set, get) => ({
  isOpen: false,
  toggle: () => set({ isOpen: !get().isOpen })
}))
