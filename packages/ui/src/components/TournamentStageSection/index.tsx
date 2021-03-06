import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  Box,
} from "@chakra-ui/react";
import { Stage } from "../../graphql/schema";
import { StageLobbySection } from "../StageLobbySection";

interface TournamentStageSectionProps {
  stages?: Stage[] | null;
}

export const TournamentStageSection = ({
  stages,
}: TournamentStageSectionProps) => (
  <Accordion allowMultiple allowToggle display="flex" flexDirection="column">
    {stages?.map((stage) => (
      <AccordionItem key={stage.id} display="flex" flexDir="column">
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              {stage.name}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <StageLobbySection
          lobbies={stage?.lobbies}
          lobbyCount={stage?.lobbies?.length}
          isFinal={stage?.isFinal}
        />
      </AccordionItem>
    ))}
  </Accordion>
);
