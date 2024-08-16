import { ActionPanel, List, Action } from "@raycast/api";
type ListItem = { title: string; url: string };
function AppList({ env }: { env: ListItem }) {
  const appList: Array<ListItem> = [
    { title: "Compliance", url: "insights/compliance" },
    { title: "Inventory", url: "insights/inventory" },
    { title: "Dashboard", url: "insights/dashboard" },
    { title: "Patch", url: "insights/patch" },
    { title: "Advisor", url: "insights/advisor" },
    { title: "Drift", url: "insights/drift" },
    { title: "Policies", url: "insights/policies" },
    { title: "Vulnerability", url: "insights/vulnerability" },
    { title: "Malware", url: "insights/malware" },
    { title: "Resource optimization", url: "insights/ros" },
    { title: "Remediations", url: "insights/remediations" },
    { title: "Tasks", url: "insights/tasks" },
    { title: "OpenShift Advisor", url: "openshift/insights/advisor" },
    { title: "OpenShift Vulnerability", url: "openshift/insights/vulnerability" },
  ];
  return (
    <List navigationTitle="Select your app" searchBarPlaceholder="Pick your app">
      {appList.map((appItem) => (
        <List.Item
          title={appItem.title}
          key={appItem.title}
          actions={
            <ActionPanel>
              <Action.OpenInBrowser title={`Open App in ${env.title} Environment`} url={`${env.url}${appItem.url}`} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
function EnvList() {
  const envList: Array<ListItem> = [
    { title: "Stage", url: "https://console.stage.redhat.com/" },
    { title: "Dev Stage", url: "https://stage.foo.redhat.com:1337/" },
    { title: "Prod", url: "https://console.redhat.com/" },
    { title: "Dev Prod", url: "https://prod.foo.redhat.com:1337/" },
  ];
  return (
    <List navigationTitle="Select your environment" searchBarPlaceholder="Pick your environment">
      {envList.map((envItem) => (
        <List.Item
          title={envItem.title}
          key={envItem.title}
          actions={
            <ActionPanel>
              <Action.Push title="Select Environment" target={<AppList env={envItem} />} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
export default function Command() {
  return <EnvList />;
}
