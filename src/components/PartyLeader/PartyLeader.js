function PartyLeader(guestList) {
    return (
        <>
            <h2>Party Leader</h2>
            {guestList[0] && <h3>{guestList[0].name}</h3>}
        </>
    );
}

export default PartyLeader;
