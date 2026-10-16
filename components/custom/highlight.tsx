import { skillCovers } from '@/experience';
import { TExperience } from '@/experience/TExperience';
import { Skill } from '@/skill/Skill';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

// Links the skills inventory with the experience list: a skill dims every row that did not use it,
// and a hovered row lights up its skills. Pinning (click or tap) keeps a skill selected while scrolling.
type State = {
  pinnedSkill: Skill | null;
  hoveredSkill: Skill | null;
  hoveredExperience: TExperience | null;
};

const initial: State = { pinnedSkill: null, hoveredSkill: null, hoveredExperience: null };

const HighlightContext = createContext<{
  state: State;
  update: (patch: Partial<State>) => void;
}>({ state: initial, update: () => {} });

export const HighlightProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState(initial);
  const update = (patch: Partial<State>) => setState((current) => ({ ...current, ...patch }));

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setState((current) => ({ ...current, pinnedSkill: null }));
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <HighlightContext.Provider value={{ state, update }}>{children}</HighlightContext.Provider>
  );
};

export const useHighlight = () => {
  const { state, update } = useContext(HighlightContext);
  return {
    pinnedSkill: state.pinnedSkill,
    activeSkill: state.hoveredSkill ?? state.pinnedSkill,
    hoveredExperience: state.hoveredExperience,
    clear: () => update({ pinnedSkill: null, hoveredSkill: null }),
    hoverExperience: (experience: TExperience | null) => update({ hoveredExperience: experience }),
    skillProps: (skill: Skill) => ({
      'aria-pressed': state.pinnedSkill === skill,
      onMouseEnter: () => update({ hoveredSkill: skill }),
      onMouseLeave: () => update({ hoveredSkill: null }),
      onFocus: () => update({ hoveredSkill: skill }),
      onBlur: () => update({ hoveredSkill: null }),
      // Touch fires a synthetic mouseenter too, so a tap clears the hover state along with toggling the pin
      onClick: () =>
        update({ pinnedSkill: state.pinnedSkill === skill ? null : skill, hoveredSkill: null }),
    }),
  };
};

export const experienceUsesSkill = (experience: TExperience, skill: Skill): boolean =>
  (experience.skills ?? []).some((candidate) => skillCovers(skill, candidate)) ||
  (experience.subExperiences ?? []).some((sub) => experienceUsesSkill(sub, skill));
