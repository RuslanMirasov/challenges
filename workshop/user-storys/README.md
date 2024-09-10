# Capstone Forum

We need to create a forum for IT company employees where people can discuss current company projects, share experiences and just socialise.

## User Stories

<hr style="border:none; height:6px; background:#4B0082;" />

## User Story 1: Discussion thread

#### Value Proposition

**As an** forum user,  
**I want to** create a new discussion thread,  
**So that** I can ask questions or share ideas about my project.

#### Description

- User can enter a title and body for the new discussion thread.
- The discussion thread will appear in the forum after submission.
- User can edit or delete their thread.

#### Acceptance criteria

- If the title or body is empty, the user should see an alert.
- The thread should appear in the forum in chronological order.
- Alert message: "Please fill out all fields."

#### Tasks

- Design the "Create Thread" form.
- Implement form validation.
- Create a database model for storing threads.
- Develop the functionality for adding, editing, and deleting threads.

<hr style="border:none; height:6px; background:#4B0082;" />

## User Story 2: Comments

#### Value proposition

**As an** forum user,  
**I want to** comment on discussion threads,  
**So that** I can contribute to ongoing conversations.

#### Description

- User can type and submit a comment on any discussion thread.
- The comment will appear below the thread.
- Users can reply to other comments.

#### Acceptance criteria

- If the comment field is empty, the user should see an alert.
- Comments should appear in the order they were posted.
- Alert message: "Please enter a comment before submitting."

#### Tasks

- Design the comment input field.
- Implement form validation for comments.
- Create a database model for storing comments.
- Develop the functionality for adding, editing, and deleting comments.

<hr style="border:none; height:6px; background:#4B0082;" />

## User Story 3: Filter by tags

#### Value proposition

**As an** forum user,  
**I want to** filter threads by tags,  
**So that** I can find relevant discussions more easily.

#### Description

- User can apply tags to threads when creating them.
- Other users can filter threads by these tags.
- The forum will display only threads matching the selected tags.

#### Acceptance criteria

- The tag filter should be easy to access and intuitive to use.
- If no threads match the selected tags, a message should appear: "No threads found with this tag."
- Alert message: "Please select at least one tag to filter by."

#### Tasks

- Design the tagging system for threads.
- Implement the tag filter functionality.
- Ensure the database supports tags for filtering.
- Develop the UI for filtering threads by tags.

<hr style="border:none; height:6px; background:#4B0082;" />
