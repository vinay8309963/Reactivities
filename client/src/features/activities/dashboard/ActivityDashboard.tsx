import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import ActivityForm from "../form/ActivityForm";

type Props = {
  activities: Activity[];
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
  selectedActivity?: Activity;
  openForm: (id: string) => void;
  closeForm: () => void;
  editMode: boolean;
};

export default function ActivityDashboard({
  activities,
  cancelSelectActivity,
  selectActivity,
  selectedActivity,
  openForm,
  closeForm,
  editMode,
}: Props) {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid size={7}>
          <ActivityList
            activities={activities}
            selectActivity={selectActivity}
          />
        </Grid>
        <Grid size={5}>
          {selectedActivity && !editMode && (
            <ActivityDetail
              selectedActivity={selectedActivity}
              cancelSelectActivity={cancelSelectActivity}
              openForm={openForm}
            />
          )}
          {editMode && (
            <ActivityForm 
              closeForm={closeForm} 
              activity={selectedActivity} 
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
}
