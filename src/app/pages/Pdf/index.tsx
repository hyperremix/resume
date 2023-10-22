import { Avatar, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { getSortedSkills } from 'experiences';
import { Skill } from 'experiences/Skill';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useThemeSlice } from 'theme/slice';

export const Pdf = () => {
  const dispatch = useDispatch();
  const { actions } = useThemeSlice();

  const [top10Skills, setTop10Skills] = useState<{ skill: Skill; months: number }[]>([]);

  useEffect(() => {
    setTop10Skills(getSortedSkills().slice(0, 14));
    dispatch(actions.setTypographySize('pdf'));
    dispatch(actions.setDarkMode(false));
  }, []);

  useEffect(
    () => () => {
      dispatch(actions.setTypographySize('regular'));
      dispatch(actions.setDarkMode(true));
    },
    [],
  );

  return (
    <>
      <Table>
        <tbody>
          <Row sx={{ backgroundColor: (theme) => theme.palette.primary.main }}>
            <Cell
              sx={{
                color: (theme) => theme.palette.getContrastText(theme.palette.primary.main),
              }}
            >
              <Typography variant="h4">Fredrik Pettersson</Typography>
              <Typography variant="h6" gutterBottom>
                Software Generalist
              </Typography>
              <Typography>
                A generalist at heart with skills both deep and wide within software development. At
                home in fast-paced environments with a focus on what is important. A mentor with a
                passion for personal growth. Enjoys sharing his experience and knowledge with
                others.
              </Typography>
            </Cell>
            <Cell sx={{ verticalAlign: 'middle' }}>
              <Avatar
                sx={{ width: 60, height: 60 }}
                src="https://s.gravatar.com/avatar/e358a919f2a68d4dc95e586d76feaac6f3defb7104dabf9c303c76e077a91065?s=120"
              />
            </Cell>
          </Row>
        </tbody>
      </Table>
      <Table>
        <tbody>
          <Row>
            <Cell
              sx={{
                width: '1%',
                whiteSpace: 'nowrap',
              }}
            >
              <Typography variant="h4">Top Skills</Typography>
              {top10Skills.map((skill) => (
                <Typography key={skill.skill}>• {skill.skill}</Typography>
              ))}
            </Cell>
            <Cell>
              <Typography variant="h4">Experiences</Typography>
            </Cell>
          </Row>
        </tbody>
      </Table>
    </>
  );
};

// const PdfStyle = createGlobalStyle`html { -webkit-print-color-adjust: exact !important; }`;

const baseComponentOptions = { overridesResolver: (_, styles) => [styles.root] };

const Cell = styled(
  'td',
  baseComponentOptions,
)({
  width: 'auto',
  overflow: 'hidden',
  wordWrap: 'break-word',
  verticalAlign: 'top',
  textAlign: 'left',
  padding: '5px',
});

const Row = styled('tr', baseComponentOptions)({});

const Table = styled(
  'table',
  baseComponentOptions,
)({
  maxWidth: '727px',
  width: '100%',
  margin: 'auto',
});
