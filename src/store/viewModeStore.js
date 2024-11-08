import { create } from 'zustand';

const useViewModeStore = create((set) => ({
    isGridView: true,
    toggleView: () => set(
        (state) => (
            { isGridView: !state.isGridView }
        )
    ),
}));

export default useViewModeStore;
